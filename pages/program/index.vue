<template>
	<main class="content-box content-program">
		<section class="section-header">
            <article class="img-logo">
                <nuxt-link to="/">
                    <img src="/img/icons/logo.png">
                </nuxt-link>
            </article>
            <article class="nav-search">
                <button @click="search = 'open'">
                    <form id="app" action="#">
                        <label :data-state="search" for="search">
                        <input type="text" placeholder="Search" @blur="search='close'"/>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.435 2C5.79818 2 2 5.64539 2 10.1587C2 14.672 5.79818 18.3174 10.435 18.3174C12.0545 18.3174 13.6061 17.8785 14.9591 17.0414L19.4625 21.5633C19.7442 21.8458 20.1228 22 20.5223 22C20.9007 22 21.2642 21.8603 21.5415 21.6026C22.1357 21.0505 22.1556 20.1283 21.5824 19.5528L17.1452 15.0973C18.261 13.6822 18.8701 11.9542 18.8701 10.1587C18.8701 5.64539 15.0719 2 10.435 2ZM16.3483 10.1587C16.3483 7.01069 13.6957 4.44971 10.435 4.44971C7.17442 4.44971 4.52181 7.01069 4.52181 10.1587C4.52181 13.3067 7.17442 15.8677 10.435 15.8677C13.6957 15.8677 16.3483 13.3067 16.3483 10.1587Z" fill="#202124"/>
                            </svg>
                        </label>
                    </form>
                </button>
            </article>
		</section>
		<section class="section-campaign">
			<h4>Bantu Sesama Sekarang</h4>
            <p>Mari ringankan beban saudara kita dengan bantu donasi ke program-program pilihan ini.</p>
            <article class="row">
                <ul class="categories-list categories-list-sales">
                    <button class="filter-sales">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0834 6C11.2448 5.58676 11.3333 5.13706 11.3333 4.66667C11.3333 4.439 11.3126 4.21618 11.2729 4H21C21.5523 4 22 4.44772 22 5C22 5.55228 21.5523 6 21 6H11.0834Z" fill="#202124"/>
                            <path d="M4.24996 6H3C2.44772 6 2 5.55228 2 5C2 4.44772 2.44772 4 3 4H4.06046C4.02075 4.21618 4 4.439 4 4.66667C4 5.13706 4.08858 5.58676 4.24996 6Z" fill="#202124"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.66667 6.33333C8.58714 6.33333 9.33333 5.58714 9.33333 4.66667C9.33333 3.74619 8.58714 3 7.66667 3C6.74619 3 6 3.74619 6 4.66667C6 5.58714 6.74619 6.33333 7.66667 6.33333ZM7.66667 8.33333C9.69171 8.33333 11.3333 6.69171 11.3333 4.66667C11.3333 2.64162 9.69171 1 7.66667 1C5.64162 1 4 2.64162 4 4.66667C4 6.69171 5.64162 8.33333 7.66667 8.33333Z" fill="#FFB600"/>
                            <path d="M19.0834 13C19.2448 12.5868 19.3333 12.1371 19.3333 11.6667C19.3333 11.439 19.3126 11.2162 19.2729 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H19.0834Z" fill="#202124"/>
                            <path d="M12.25 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H12.0605C12.0207 11.2162 12 11.439 12 11.6667C12 12.1371 12.0886 12.5868 12.25 13Z" fill="#202124"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6667 13.3333C16.5871 13.3333 17.3333 12.5871 17.3333 11.6667C17.3333 10.7462 16.5871 10 15.6667 10C14.7462 10 14 10.7462 14 11.6667C14 12.5871 14.7462 13.3333 15.6667 13.3333ZM15.6667 15.3333C17.6917 15.3333 19.3333 13.6917 19.3333 11.6667C19.3333 9.64162 17.6917 8 15.6667 8C13.6416 8 12 9.64162 12 11.6667C12 13.6917 13.6416 15.3333 15.6667 15.3333Z" fill="#FFB600"/>
                            <path d="M11.0834 20C11.2448 19.5868 11.3333 19.1371 11.3333 18.6667C11.3333 18.439 11.3126 18.2162 11.2729 18H21C21.5523 18 22 18.4477 22 19C22 19.5523 21.5523 20 21 20H11.0834Z" fill="#202124"/>
                            <path d="M4.24996 20H3C2.44772 20 2 19.5523 2 19C2 18.4477 2.44772 18 3 18H4.06046C4.02075 18.2162 4 18.439 4 18.6667C4 19.1371 4.08858 19.5868 4.24996 20Z" fill="#202124"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.66667 20.3333C8.58714 20.3333 9.33333 19.5871 9.33333 18.6667C9.33333 17.7462 8.58714 17 7.66667 17C6.74619 17 6 17.7462 6 18.6667C6 19.5871 6.74619 20.3333 7.66667 20.3333ZM7.66667 22.3333C9.69171 22.3333 11.3333 20.6917 11.3333 18.6667C11.3333 16.6416 9.69171 15 7.66667 15C5.64162 15 4 16.6416 4 18.6667C4 20.6917 5.64162 22.3333 7.66667 22.3333Z" fill="#FFB600"/>
                        </svg>
                        Filter
                    </button> 
                    <button class="filter-sales">
                        Paling Mendesak
                    </button><button class="filter-sales is-active">
                        Pilihan
                    </button><button class="filter-sales">
                        Kesehatan
                    </button><button class="filter-sales">
                        Ramadhan
                    </button><button class="filter-sales">
                        Pembangunan
                    </button><button class="filter-sales">
                        Pendidikan
                    </button>
                </ul>
            </article>
			<article class="card-campaign" v-for="(row, index) in campaign" :key="index" :value="row.id">
				<nuxt-link :to="`/program/${row.title}/campaign`" v-if="row.is_active == 0" class="disabled">
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
							<span class="time-end">Berakhir</span>
						</section>
					</article>
				</section>
				</nuxt-link>
				<nuxt-link :to="`/program/${row.title}/campaign`" v-else-if="row.is_active == 1">
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
		</section>
        <section class="show-btn-bottom">
			<a href="#" target="_blank" class="btn btn-rounded btn-default btn-gradient-shadow btn-gradient-shadow-green floating-hubungi-kami">
			<img src="/img/icons/ic-whatsapp.svg"> Hubungi Kami</a>
		</section>
	</main>
</template>

<script>
	import ProgressBar from 'vue-simple-progress'
  	export default {
		components: {
			ProgressBar 
		},
      	data () {
      		return {
                page: 1,
                perPage: 5,
                loading: false,
				search: "close",
				isLoading: true,
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
						"is_active": 0,
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
						"is_active": 0,
					}
				],
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
