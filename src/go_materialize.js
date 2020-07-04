import M from "materialize-css";

// document.addEventListener('DOMContentLoaded', function () {
//     M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), {
//         coverTrigger: false
//     });
//     M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'), {
//         direction: 'left'
//     });
//     M.Sidenav.init(document.querySelector('#slide-out'), {});
// });

export const dropdownTrigger = () => {
    document.addEventListener('DOMContentLoaded', function () {
        M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), {
            coverTrigger: false
        });
    })
}

export const floatingActionButton = () => {
    document.addEventListener('DOMContentLoaded', function () {
        M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'), {
            direction: 'left'
        });
    })
}

export const sideNav = () => {
    document.addEventListener('DOMContentLoaded', function () {
        M.Sidenav.init(document.querySelector('#slide-out'), {});
    })
}