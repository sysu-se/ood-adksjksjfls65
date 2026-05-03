<script>
    import { userGrid } from '../../node_modules/@sudoku/stores/grid';
    let isExploring = false;
    let exploreSnapshot = null;

    function toggleExplore() {
        if (!isExploring) {
            exploreSnapshot = userGrid.getSencode();
            isExploring = true;
        } else {
            if (confirm("提交探索结果吗？放弃将回退。")) {
                isExploring = false;
            } else {
                userGrid.decodeSencode(exploreSnapshot);
                isExploring = false;
            }
        }
    }
</script>

<button on:click={toggleExplore}>
    {isExploring ? "结束探索" : "开始探索"}
</button>
