<template>   
    <footer class="footer-section">
        <section class="footer-logo">
           <img src="/img/icons/logo-white.png" alt="logo-adaide"> 
        </section>
        <section class="footer-address">
            <strong>Ada Ide Indonesia</strong>
            <p>Jl. Setra Dago Barat No. 25
            Antapani Kulon, Kec. Antapani
            Kota Bandung, Jawa Barat 40291
            </p>
        </section>
        <section class="menu-footer row">
            <article class="col-4">
                <strong>Program</strong>
                <p>
                    <nuxt-link to="/campaign">Semua Program</nuxt-link>
                    <nuxt-link to="/news">Kabar Terbaru</nuxt-link>
                </p>
            </article>
            <article class="col-4">
                <strong>Hubungi Kami</strong>
                <p>
                    <a target="_blank" href="#">Pesan WhatsApp</a>
                    <nuxt-link to="/">Pusat Bantuan</nuxt-link>
                </p>
            </article>
            <article class="col-4">
                <strong>Perusahaan</strong>
                <p>
                    <nuxt-link to="/">Tentang Kami</nuxt-link>
                    <nuxt-link to="/campaign">Program Kami</nuxt-link>
                    <nuxt-link to="/news">Blog</nuxt-link>
                </p>
            </article>
        </section>
        <section class="footer-socmed">
            <a href="#" target="_blank"><img src="/img/icons/ic-instagram.svg" alt="icon-sosmed"></a>
            <a href="#" target="_blank"><img src="/img/icons/ic-facebook.svg" alt="icon-sosmed"></a>
            <a href="#" target="_blank"><img src="/img/icons/ic-twitter.svg" alt="icon-sosmed"></a>
            <a href="#" target="_blank"><img src="/img/icons/ic-youtube.svg" alt="icon-sosmed"></a>
            <a href="#" target="_blank"><img src="/img/icons/ic-linkedin.svg" alt="icon-sosmed"></a>
        </section>
        <section class="copyright-section">
            <p>© 2021 Ada Ide Indonesia</p>
        </section>
    </footer>

</template>
