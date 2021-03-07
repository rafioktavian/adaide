<template>
	<main class="content-box content-home">
		<section class="section-header">
				<article class="img-logo">
					<img src="/img/icons/logo.png">
				</article>
				<article class="nav-search">
					<button @click="search = 'open'">
						<form id="app" action="#">
							<label :data-state="search" for="search">
							<input type="text" placeholder="Search" @blur="search='close'"/>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M10.435 2C5.79818 2 2 5.64539 2 10.1587C2 14.672 5.79818 18.3174 10.435 18.3174C12.0545 18.3174 13.6061 17.8785 14.9591 17.0414L19.4625 21.5633C19.7442 21.8458 20.1228 22 20.5223 22C20.9007 22 21.2642 21.8603 21.5415 21.6026C22.1357 21.0505 22.1556 20.1283 21.5824 19.5528L17.1452 15.0973C18.261 13.6822 18.8701 11.9542 18.8701 10.1587C18.8701 5.64539 15.0719 2 10.435 2ZM16.3483 10.1587C16.3483 7.01069 13.6957 4.44971 10.435 4.44971C7.17442 4.44971 4.52181 7.01069 4.52181 10.1587C4.52181 13.3067 7.17442 15.8677 10.435 15.8677C13.6957 15.8677 16.3483 13.3067 16.3483 10.1587Z" fill="#FFB600"/>
								</svg>
							</label>
						</form>
					</button>
				</article>
		</section>
		<section class="banner">
			<div  v-swiper:mySwiper="swiperBannerOption">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(row, index) in banners" :key="index" :value="row.id">
						<img :src="row.image">
						<h5>{{row.title}}</h5>
						<nuxt-link :to="`/program/${row.id}/detail`" class="btn btn-cta-1">Selengkapnya</nuxt-link>
					</div>
				</div>
				<div class="swiper-pagination" slot="pagination"></div>
			</div>
		</section>
		<section class="banner-story">
			<h4>Berkat Bantuan Anda</h4>
			<div v-swiper:storySwiper="swiperStoryOption">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(row, index) in stories" :key="index" :value="row.id">
						<nuxt-link :to="`/program/${row.id}/detail`"><img :src="row.image"><h5>{{row.title}}</h5></nuxt-link>
					</div>
				</div>
			</div>
		</section>
		<section class="section-campaign">
			<h4>Bantu Sesama Sekarang</h4>
			<article class="card-campaign" v-if="index < limit_by" v-for="(row, index) in campaign" :key="index" :value="row.id">
				<nuxt-link :to="`/campaign/${row.title}/detail`">
				<figure>
					<img :src="row.image">
				</figure>
				<section class="progress-campaign">
					<h5>{{row.title}}</h5>
					<span :class="`badge-category ${row.category}`">{{row.category}}</span>
					<progress-bar size="medium" :val="50"></progress-bar>
					<article class="card-funding">
						<section class="donation">
							<span>Terkumpul</span>
							<span>Rp {{row.terkumpul | currency}}</span>
						</section>
						<section class="left">
							<span>Sisa Waktu</span>
							<span>{{(new Date(row.expire_date) - new Date(row.start_date)) / (1000 * 60 * 60 * 24)}} Hari</span>
						</section>
					</article>
				</section>
				</nuxt-link>
			</article>
			<article class="btn-campaign">
				<button class="url-campaign btn-link-url" @click="simple_toggle(default_limit, campaign.length)">{{ limit_by===5?'Muat Lebih Banyak': 'Muat Lebih Sedikit'}}</button>
			</article>
		</section>
		<section class="show-btn-bottom">
			<a href="#" target="_blank" class="btn btn-rounded btn-default btn-gradient-shadow btn-gradient-shadow-green floating-hubungi-kami">
			<img src="/img/icons/ic-whatsapp.svg"> Hubungi Kami</a>
		</section>
		<section class="section-subscribe">
			<h4>Kenali kami lebih jauh</h4>
			<p>Dapatkan informasi menarik seputar pedalaman langsung
			dikirim ke inbox Anda hari ini.</p>
			<div class="subscribe-content">
				<input class="subscribe-input-name" type="text" placeholder="Nama Lengkap">
				<input class="subscribe-input" type="text" placeholder="Email Anda">
				<button class="btn btn-cta-2">Kirim Newsletter</button>
			</div>
		</section>
	</main>
</template>

<script>
	import Vue from 'vue'
	import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay } from 'swiper'
	import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
	import ProgressBar from 'vue-simple-progress'
	
	// Swiper modules
	SwiperClass.use([Pagination, Mousewheel, Autoplay])
	
	// Global use
	Vue.use(getAwesomeSwiper(SwiperClass))
	
	// Or local component
	const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)
  	export default {
		components: {
			Swiper,
			SwiperSlide,
			ProgressBar 
		},
      	data () {
      		return {
				search: "close",
				isLoading: true,
				data : [],
				banners: [
					{
						"id": 1,
						"title": "Ayo Bantu Kami Mengurangi Sampah di Bumi Ini.",
						"image": "https://i.ibb.co/d6Zmxmv/banner.png",
						"content": "Ayo Bantu Kami Mengurangi Sampah di Bumi Ini.",
					},
					{
						"id": 2,
						"title": "Ayo Bantu Kami Mengurangi Sampah di Bumi Ini.",
						"image": "https://i.ibb.co/d6Zmxmv/banner.png",
						"content": "Ayo Bantu Kami Mengurangi Sampah di Bumi Ini.",
					},
					{
						"id": 3,
						"title": "Ayo Bantu Kami Mengurangi Sampah di Bumi Ini.",
						"image": "https://i.ibb.co/d6Zmxmv/banner.png",
						"content": "Ayo Bantu Kami Mengurangi Sampah di Bumi Ini.",
					},
				],
				stories: [
					{
						"id": 1,
						"title": "Daur Ulang Sampah menjadi Mobil Listrik",
						"image": "https://i.ibb.co/gZkydZM/img-home7.png",
						"content": "Daur Ulang Sampah menjadi Mobil Listrik"
					},
					{
						"id": 2,
						"title": "Earth Hour untuk Bumi yang Lebih Baik",
						"image": "https://i.ibb.co/HGgCkXz/img-home6.png",
						"content": "Earth Hour untuk Bumi yang Lebih Baik"
					},
				],
				campaign: [
					{
						"id": 1,
						"title": "Kurangi Sampah dari Planet Bumi",
						"image": "https://i.ibb.co/BCGf9QR/img-home1.png",
						"start_date": "2021-03-01",
						"expire_date": "2022-03-18",
						"terkumpul": "502397992",
						"target": "902397992",
						"category": "umum",
						"progress": "50",
						"is_active": 1,
					},
					{
						"id": 2,
						"title": "Buka Puasa Sehat untuk Pejuang Jalanan Bandung",
						"image": "https://i.ibb.co/QHRMfZt/img-home2.png",
						"start_date": "2021-03-01",
						"expire_date": "2021-03-30",
						"terkumpul": "43768000",
						"target": "83768000",
						"category": "ramadhan",
						"progress": "50",
						"is_active": 1,
					},
					{
						"id": 3,
						"title": "Pembangunan Masjid yang Telah Rusak",
						"image": "https://i.ibb.co/RHsrKQq/img-home3.png",
						"start_date": "2021-03-01",
						"expire_date": "2021-03-30",
						"terkumpul": "43768000",
						"target": "83768000",
						"category": "pembangunan",
						"progress": "50",
						"is_active": 1,
					},
					{
						"id": 4,
						"title": "Bantu Pendidikan Indonesia lebih Cemerlang",
						"image": "https://i.ibb.co/yQH1XPR/img-home4.png",
						"start_date": "2021-03-01",
						"expire_date": "2021-03-30",
						"terkumpul": "43768000",
						"target": "83768000",
						"category": "pendidikan",
						"progress": "50",
						"is_active": 1,
					},
					{
						"id": 5,
						"title": "Tenda Kesehatan untuk Warga Pedalaman NTT",
						"image": "https://i.ibb.co/B4JSfwc/img-home5.png",
						"start_date": "2021-03-01",
						"expire_date": "2021-03-30",
						"terkumpul": "43768000",
						"target": "83768000",
						"category": "kesehatan",
						"progress": "50",
						"is_active": 1,
					},
					{
						"id": 6,
						"title": "Indonesia Menuju Luar Angkasa",
						"image": "https://i.ibb.co/SfJ46cP/img-home6.png",
						"start_date": "2021-03-01",
						"expire_date": "2021-03-30",
						"terkumpul": "43768000",
						"target": "83768000",
						"category": "umum",
						"progress": "50",
						"is_active": 1,
					},
					{
						"id": 7,
						"title": "Bantu Kesehatan Udin Melawan Tumor",
						"image": "https://i.ibb.co/SVjCDGP/img-home7.png",
						"start_date": "2021-03-01",
						"expire_date": "2021-03-30",
						"terkumpul": "43768000",
						"target": "83768000",
						"category": "umum",
						"progress": "50",
						"is_active": 1,
					},
					{
						"id": 8,
						"title": "Kebanyakan Sampah dari Planet Bumi",
						"image": "https://i.ibb.co/SfJ46cP/img-home6.png",
						"start_date": "2021-03-01",
						"expire_date": "2021-03-30",
						"terkumpul": "43768000",
						"target": "83768000",
						"category": "umum",
						"progress": "50",
						"is_active": 1,
					}
				],
				default_limit: 5,
        		limit_by: 5,
        		swiperBannerOption: {
					spaceBetween: 30,
					centeredSlides: true,
					loop: true,
					// autoplay: {
					// 	delay: 2500,
					// 	disableOnInteraction: false
					// },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                },
                swiperStoryOption: {
					slidesPerView: 1.6,
					spaceBetween: 7,
                    centeredSlides: false,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
			}
		},
        methods: {
			scrollToTop() {
				window.scrollTo(0, 1250);
			},
			simple_toggle(default_limit, filters_length) {
				this.limit_by = (this.limit_by === default_limit) ? filters_length : default_limit;
			}
        },
		mounted() {
            this.totalCampaign = this.campaign.length
        },
        created(){
		},
		watch: {
        },
    }
</script>
