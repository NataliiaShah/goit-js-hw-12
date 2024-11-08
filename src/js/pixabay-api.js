import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export { getPictures }

const perPage = 15;

async function getPictures(name, page) {
    const KEY = '46814348-ba4151efdf5028abb4287aeb2';

    try {
        if (name.includes(' ')) {
            name.replace(/\s+/g, '+');
        }

        const response = await axios.get(`https://pixabay.com/api/`, {
            params: {
                key: KEY,
                q: name,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page: page,
                per_page: perPage,
            }
        })
        return response;
    }
    catch {
        iziToast.error({
            title: 'Error',
            message: 'Sorry! The site is currently unavailable. Please try later!',
        });
        console.error(error.message);
    }
}

export { scrollingTopPage }

function scrollingTopPage() {
    document.addEventListener('DOMContentLoaded', function () {
        const upButton = document.querySelector('.up-btn');

        upButton.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            document.body.classList.add('scrolling');
        });

        window.addEventListener('scroll', function () {
            if (window.scrollY > 200) {
                upButton.classList.add('show');
            } else {
                upButton.classList.remove('show');
            }

            if (document.body.classList.contains('scrolling') && window.scrollY === 0) {
                document.body.classList.remove('scrolling');
            }
        });
    });
}