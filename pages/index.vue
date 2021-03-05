<template>
	<main class="content-box content-home">
		<section class="banner">
			<div  v-swiper:mySwiper="swiperBannerOption">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(row, index) in banners" :key="index" :value="row.id">
						<img :src="row.image">
						<h4>{{row.title}}</h4>
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
						<nuxt-link :to="`/program/${row.id}/detail`"><img :src="row.image"></nuxt-link>
					</div>
				</div>
			</div>
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
	
	// Swiper modules
	SwiperClass.use([Pagination, Mousewheel, Autoplay])
	
	// Global use
	Vue.use(getAwesomeSwiper(SwiperClass))
	
	// Or local component
	const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)
  	export default {
		components: {
			Swiper,
			SwiperSlide 
		},
      	data () {
      		return {
				isLoading: true,
				isActiveCategory: false,
				isAllActiveCategory: true,
				data : [],
				rekomendasi: [],
				rekomensales: [],
				paginate: ['rekomendasi'],
				pagination:{
					current_page: 1,
				},
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
						"id": 44,
						"title": "MOBIL",
						"image": "1599451450_Banner RS Agustus 2020 05092020 Mobil.png",
						"link": "https://rs-admin.demoapp.xyz",
						"start_date": "2020-09-06",
						"expire_date": "2022-10-06",
						"is_active": 1,
						"created_at": "2020-09-06 19:58:54",
						"updated_at": "2021-02-27 15:58:58",
						"banner_type": 2,
						"content": "mobil",
						"full_path": "https://rs-admin.demoapp.xyz/images/banner/1599451450_Banner RS Agustus 2020 05092020 Mobil.png",
						"banner_type_text": "Promo Banner",
						"start_date_text": "06 Sep 2020",
						"expire_date_text": "06 Oct 2022"
					},
					{
						"id": 45,
						"title": "PROPERTY",
						"image": "1599397200_PROPERTY.jpg",
						"link": "https://rs-admin.demoapp.xyz",
						"start_date": "2020-09-06",
						"expire_date": "2022-10-06",
						"is_active": 1,
						"created_at": "2020-09-06 20:00:00",
						"updated_at": "2021-02-27 15:58:20",
						"banner_type": 2,
						"content": "PROPERTY",
						"full_path": "https://rs-admin.demoapp.xyz/images/banner/1599397200_PROPERTY.jpg",
						"banner_type_text": "Promo Banner",
						"start_date_text": "06 Sep 2020",
						"expire_date_text": "06 Oct 2022"
					},
					{
						"id": 46,
						"title": "MOTOR",
						"image": "1599397933_MOTOR.jpg",
						"link": "https://rs-admin.demoapp.xyz",
						"start_date": "2020-09-06",
						"expire_date": "2022-10-06",
						"is_active": 1,
						"created_at": "2020-09-06 20:01:00",
						"updated_at": "2021-02-27 15:58:06",
						"banner_type": 2,
						"content": "MOTOR",
						"full_path": "https://rs-admin.demoapp.xyz/images/banner/1599397933_MOTOR.jpg",
						"banner_type_text": "Promo Banner",
						"start_date_text": "06 Sep 2020",
						"expire_date_text": "06 Oct 2022"
					},
					{
						"id": 47,
						"title": "HOTEL",
						"image": "1599451818_Banner RS Agustus 2020 05092020 Hotel.png",
						"link": "https://rs-admin.demoapp.xyz",
						"start_date": "2020-09-06",
						"expire_date": "2022-10-06",
						"is_active": 1,
						"created_at": "2020-09-06 20:01:45",
						"updated_at": "2021-02-27 15:57:33",
						"banner_type": 1,
						"content": "HOTEL",
						"full_path": "https://rs-admin.demoapp.xyz/images/banner/1599451818_Banner RS Agustus 2020 05092020 Hotel.png",
						"banner_type_text": "Top Banner",
						"start_date_text": "06 Sep 2020",
						"expire_date_text": "06 Oct 2022"
					},
					{
						"id": 48,
						"title": "BANK",
						"image": "1599450748_Banner RS Agustus 2020 05092020 Bank.png",
						"link": "https://rs-admin.demoapp.xyz",
						"start_date": "2020-09-06",
						"expire_date": "2022-10-06",
						"is_active": 1,
						"created_at": "2020-09-06 20:02:34",
						"updated_at": "2021-02-27 15:57:24",
						"banner_type": 1,
						"content": "BANK",
						"full_path": "https://rs-admin.demoapp.xyz/images/banner/1599450748_Banner RS Agustus 2020 05092020 Bank.png",
						"banner_type_text": "Top Banner",
						"start_date_text": "06 Sep 2020",
						"expire_date_text": "06 Oct 2022"
					},
					{
						"id": 49,
						"title": "ASURANSI",
						"image": "1599450731_Banner RS Agustus 2020 05092020 Asuransi.png",
						"link": "https://rs-admin.demoapp.xyz",
						"start_date": "2020-09-06",
						"expire_date": "2022-10-06",
						"is_active": 1,
						"created_at": "2020-09-06 20:03:18",
						"updated_at": "2021-02-27 15:57:14",
						"banner_type": 1,
						"content": "asuransi",
						"full_path": "https://rs-admin.demoapp.xyz/images/banner/1599450731_Banner RS Agustus 2020 05092020 Asuransi.png",
						"banner_type_text": "Top Banner",
						"start_date_text": "06 Sep 2020",
						"expire_date_text": "06 Oct 2022"
					},
					{
						"id": 50,
						"title": "INTERNET",
						"image": "1599451437_Banner RS Agustus 2020 05092020 Internet.png",
						"link": "https://rs-admin.demoapp.xyz",
						"start_date": "2020-09-06",
						"expire_date": "2022-10-06",
						"is_active": 1,
						"created_at": "2020-09-06 20:04:09",
						"updated_at": "2021-02-27 15:57:04",
						"banner_type": 1,
						"content": "INTERNET",
						"full_path": "https://rs-admin.demoapp.xyz/images/banner/1599451437_Banner RS Agustus 2020 05092020 Internet.png",
						"banner_type_text": "Top Banner",
						"start_date_text": "06 Sep 2020",
						"expire_date_text": "06 Oct 2022"
					},
					{
						"id": 51,
						"title": "Tour & Travel",
						"image": "1599450649_Banner RS Agustus 2020 05092020 Tour & travel.png",
						"link": "https://rs-admin.demoapp.xyz",
						"start_date": "2020-09-06",
						"expire_date": "2022-04-30",
						"is_active": 1,
						"created_at": "2020-09-06 20:04:55",
						"updated_at": "2021-02-27 15:56:50",
						"banner_type": 1,
						"content": "Tour & Travel",
						"full_path": "https://rs-admin.demoapp.xyz/images/banner/1599450649_Banner RS Agustus 2020 05092020 Tour & travel.png",
						"banner_type_text": "Top Banner",
						"start_date_text": "06 Sep 2020",
						"expire_date_text": "30 Apr 2022"
					}
				],
				st: "",
        		sub_category_id: "",
				categories : [],
				subcategories : [],
				subcategoripopuler : [],
				mainCategories : [],
				otherCategories : [],
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
                },
				searchMerek: '',
                filter: {
                    saveMerek: [],
                    searchLocation: [],
                    query: {
                        category_id: '',
                        location_id: '',
                        rating: '',
                        promo: '',
                        st: '',
                    },
				},
				model: {
                    sub_category_name: '',
                    location_name: '',
                },
			}
		},
        methods: {
			scrollToTop() {
				window.scrollTo(0, 1250);
			},
        },
        created(){
		},
		watch: {
        },
    }
</script>
