<div class="bg-white">
    <div class="rating pb-3">
        <input type="radio" name="rating" value="5" id="5">
        <label for="5">
            <img src="/assets/newimg/star_01.svg" alt="" width="30">
        </label>
        <input type="radio" name="rating" value="4" id="4">
        <label for="4">
            <img src="/assets/newimg/star_01.svg" alt="" width="30">
        </label>
        <input type="radio" name="rating" value="3" id="3">
        <label for="3">
            <img src="/assets/newimg/star_01.svg" alt="" width="30">
        </label>
        <input type="radio" name="rating" value="2" id="2">
        <label for="2">
            <img src="/assets/newimg/star_01.svg" alt="" width="30">
        </label>
        <input type="radio" name="rating" value="1" id="1">
        <label for="1">
            <img src="/assets/newimg/star_01.svg" alt="" width="30">
        </label>
    </div>

    <div class="d-none d-xxl-block d-sm-block d-md-block d-lg-none">
        <div class="d-flex justify-content-center text-center pb-4">
            <div class="col">Поганий</div>
            <div class="col">Так собі</div>
            <div class="col">Нормальний</div>
            <div class="col">Хороший</div>
            <div class="col">Чудовий</div>
        </div>
    </div>










<!--    <form method="post">-->
<!--        <div class="form-group mb-3">-->
<!--            <label class="">-->
<!--                Переваги-->
<!--            </label>-->
<!---->
<!--            <textarea class="form-control"-->
<!--                      id="exampleFormControlTextarea1"-->
<!--                      rows="3"></textarea>-->
<!--        </div>-->
<!--        <div class="form-group mb-3">-->
<!--            <label class="">-->
<!--                Недоліки-->
<!--            </label>-->
<!--            <textarea class="form-control"-->
<!--                      id="exampleFormControlTextarea2"-->
<!--                      rows="3"></textarea>-->
<!--        </div>-->
<!--        <div class="form-group mb-3">-->
<!--            <label class="">-->
<!--                Коментар-->
<!--            </label>-->
<!--            <textarea class="form-control"-->
<!--                      id="exampleFormControlTextarea3"-->
<!--                      rows="3"></textarea>-->
<!--        </div>-->
<!--        <div-->
<!--                class="form-group mb-2 pt-3 d-flex align-items-center justify-content-center">-->
<!--            <button type="button"-->
<!--                    class="btn btn-lg btn-primary w-100">-->
<!--                Надіслати-->
<!--            </button>-->
<!--        </div>-->
<!--    </form>-->

    <form id="form-contact" method="POST" class="contact-form" autocomplete="off" enctype="multipart/form-data">

        <div class="preloader"></div>
        <p class="contact-form__message"></p>
        <div class="form-group mb-3">
            <label class="">
                Переваги
            </label>
            <!-- Поле с Переваги -->
            <div class="contact-form__input-wrapper contact-form__input-wrapper_name">
                <input name="name" type="text" class="contact-form__input form-control contact-form__input_name"
                       placeholder="Переваги">
            </div>
        </div>

        <div class="form-group mb-3">
            <label class="">
                Недоліки
            </label>
            <!-- Поле с Недоліки -->
            <div class="contact-form__input-wrapper contact-form__input-wrapper_trouble">
                <input name="trouble" type="text" class="contact-form__input form-control contact-form__input_trouble"
                       placeholder="Недоліки">
            </div>
        </div>
        <div class="form-group mb-3">
            <label class="">
                Коментар
            </label>
            <!-- Поле с Коментар -->
            <div class="contact-form__input-wrapper contact-form__input-wrapper_comment">
                <input name="comment" type="text" class="contact-form__input form-control contact-form__input_comment"
                       placeholder="Недоліки">
            </div>
        </div>




        <!--Поле с темой в письме-->
        <input name="theme" type="hidden" class="contact-form__input form-control contact-form__input_theme"
               value="Оценочкая форма с карточки товара">

        <!--Кнопка отправки формы-->
        <button type="submit" class="contact-form__button btn btn-lg btn-primary w-100">Отправить</button>

    </form>








</div>





<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="/telegramform/js/telegramform.js"></script>

<script>
    (function ($) {
        $(".contact-form").submit(function (event) {
            event.preventDefault();

            // Сообщения формы
            let successSendText = "Сообщение успешно отправлено";
            let errorSendText = "Сообщение не отправлено. Попробуйте еще раз!";
            let requiredFieldsText = "Заполните поля с именем и телефоном";

            // Сохраняем в переменную класс с параграфом для вывода сообщений об отправке
            let message = $(this).find(".contact-form__message");

            let form = $("#" + $(this).attr("id"))[0];
            let fd = new FormData(form);
            $.ajax({
                url: "send-message-to-telegram.php",
                type: "POST",
                data: fd,
                processData: false,
                contentType: false,
                beforeSend: () => {
                    $(".preloader").addClass("preloader_active");
                },
                success: function success(res) {
                    $(".preloader").removeClass("preloader_active");

                    // Посмотреть на статус ответа, если ошибка
                    // console.log(res);
                    let respond = $.parseJSON(res);

                    if (respond === "SUCCESS") {
                        message.text(successSendText).css("color", "#21d4bb");
                        setTimeout(() => {
                            message.text("");
                        }, 4000);
                    } else if (respond === "NOTVALID") {
                        message.text(requiredFieldsText).css("color", "#d42121");
                        setTimeout(() => {
                            message.text("");
                        }, 3000);
                    } else {
                        message.text(errorSendText).css("color", "#d42121");
                        setTimeout(() => {
                            message.text("");
                        }, 4000);
                    }
                }
            });
        });
    })(jQuery);
</script>


<!-- -------------------------------------------------------------------------------- -->