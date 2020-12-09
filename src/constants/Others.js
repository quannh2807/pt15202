import Swal from "sweetalert2";
import { nyanCat } from "constants/Images";

export function formatCash(str) {
    return str
        .split("")
        .reverse()
        .reduce((prev, next, index) => {
            return (index % 3 ? next : next + ",") + prev;
        });
}

export const alert = () =>
    Swal.fire({
        title: "Thêm vào giỏ hàng thành công",
        width: 400,
        padding: "2em",
        backdrop: `
                rgba(0,0,123,0.4)
                url(${nyanCat})
                left top
                no-repeat
            `,
    });
