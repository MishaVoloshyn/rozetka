<div class="row" x-data="{ expanded: false }">
    <div class="col-12 px-2">
        <div
            class="row gx-0 shop_container"
            :class="{ 'collapsed-grid': ! expanded }"
        >
            <?php for ($i = 1; $i <= 18; $i++): ?>
                <div class="col-xxl-2 col-md-3 col-6 col-xxs-12 px-1">
                    <?php include 'components/product-catalog.php'; ?>
                </div>
            <?php endfor; ?>
        </div>
    </div>
    <div class="col-12 text-center mt-2">
        <button class="btn btn-sm btn-primary" @click="expanded = ! expanded">
            Показати ще
        </button>
    </div>
</div>
