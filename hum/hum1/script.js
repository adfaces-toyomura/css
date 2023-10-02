window.onload = function () {
    $(".burger").click(function () {
        $(".menu").toggleClass("is-active");
        $(".burger").toggleClass("is-active");
    });
}
// クリックした際にクラスを付与し、表示非表示を実装している。
// .toggleClassはJquery特有の関数で、クラスがあれば削除、無ければ追加の動作をする。