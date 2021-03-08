<template>
	<main class="content-box content-program-detail">
		<section class="section-header">
            <article class="back-detail">
                <a @click="$router.go(-1)">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3038 1.46026C12.8765 2.07394 12.8765 3.06892 12.3038 3.6826L6.00751 10.4286H21.5333C22.3433 10.4286 23 11.1321 23 12C23 12.8679 22.3433 13.5714 21.5333 13.5714H6.00751L12.3038 20.3174C12.8765 20.9311 12.8765 21.9261 12.3038 22.5397C11.731 23.1534 10.8023 23.1534 10.2296 22.5397L1.42958 13.1112C0.856808 12.4975 0.856808 11.5025 1.42958 10.8888L10.2296 1.46026C10.8023 0.84658 11.731 0.84658 12.3038 1.46026Z" fill="white"/>
                    </svg>
                </a>
            </article>
		</section>
        <section class="banner">
            <p>{{campaign.title}}</p>
            <img :src="campaign.image">		
		</section>
        <div class="page-content m-t-0 bg-blue">
            <div class="sec-full section bg-white">
                <h3>{{campaign.title}}</h3>
                <div class="content-detail clear">
                <div class="content-left">
                    <label>Dana Terkumpul
                    </label>
                    <div class="fund">Rp {{campaign.terkumpul | currency}}
                    </div>
                </div>
                <div class="content-right">
                    <div class="left-fund">
                    dari target Rp {{campaign.target | currency}}
                    </div>
                </div>
                </div>
                <progress-bar size="medium" :val="campaign.progress"></progress-bar>
                <div class="content-detail clear m-t-10">
                    <div class="content-left">
                        <b>{{campaign.progress}}%</b> Tercapai
                    </div>
                    <div class="content-right">
                        Sisa Waktu 
                        <b>{{(new Date(campaign.expire_date) - new Date(campaign.start_date)) / (1000 * 60 * 60 * 24)}} Hari</b>
                    </div>
                </div>
                <div class="content-detail m-t-10 clear">
                <div class="action-share">
                    <a href="#share-content" class="show-share-bottom">
                    <div class="btn-share">
                        <svg width="22" height="20" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="path-fill-active" d="M18 16.8067C17.1133 16.8067 16.32 17.1567 15.7133 17.705L7.395 12.8633C7.45333 12.595 7.5 12.3267 7.5 12.0467C7.5 11.7667 7.45333 11.4983 7.395 11.23L15.62 6.43501C16.25 7.01834 17.0783 7.38001 18 7.38001C19.9367 7.38001 21.5 5.81667 21.5 3.88001C21.5 1.94334 19.9367 0.380005 18 0.380005C16.0633 0.380005 14.5 1.94334 14.5 3.88001C14.5 4.16001 14.5467 4.42834 14.605 4.69667L6.38 9.49167C5.75 8.90834 4.92167 8.54667 4 8.54667C2.06333 8.54667 0.5 10.11 0.5 12.0467C0.5 13.9833 2.06333 15.5467 4 15.5467C4.92167 15.5467 5.75 15.185 6.38 14.6017L14.6867 19.455C14.6283 19.7 14.5933 19.9567 14.5933 20.2133C14.5933 22.0917 16.1217 23.62 18 23.62C19.8783 23.62 21.4067 22.0917 21.4067 20.2133C21.4067 18.335 19.8783 16.8067 18 16.8067Z">
                        </path>
                        </svg>
                    </div>
                    </a>
                </div>
                <div class="action-donate">
                    <a href="https://insanbumimandiri.org/id/campaign/paket-berbuka-puasa-untuk-dhuafa-pedalaman/donate">
                    <div class="btn-donate fbq-addtocart">Donasi Sekarang
                    </div>
                    </a>
                </div>
                </div>
            </div>
            <div class="section-in">
                <div class="sec-full sec-desc content-details bg-white">
                <h2>Deskripsi Program
                </h2>
                <div id="desc-min" class="sec-min" data-gtm-vis-recent-on-screen-12447128_24="11835" data-gtm-vis-first-on-screen-12447128_24="11835" data-gtm-vis-total-visible-time-12447128_24="100" data-gtm-vis-has-fired-12447128_24="1">
                    <p>{{campaign.description}}</p>
                </div>
                <hr>
                <a href="#" onclick="read_more(event, 'desc-min', 'sec-desc')" class="rm-desc-min">
                    <div class="read-more">Selengkapnya&nbsp;&nbsp; 
                    <i class="fa fa-arrow-right">
                    </i>
                    </div>
                </a>
                <a href="#" onclick="read_short(event, 'desc-min', 'sec-desc')" class="rs-desc-min hide">
                    <div class="read-more">Lebih Sedikit&nbsp;&nbsp; 
                    <i class="fa fa-arrow-left">
                    </i>
                    </div>
                </a>
                </div>
                <div class="sec-full sec-news content-details bg-white">
                    <h2>Berita Terbaru
                    </h2>
                    <div id="news-min" class="sec-min">
                        <p>Belum ada kabar baru
                        </p>
                    </div>
                    <hr>
                    <a href="#" onclick="read_more(event, 'news-min', 'sec-news')" class="rm-news-min">
                        <div class="read-more">Selengkapnya&nbsp;&nbsp; 
                        <i class="fa fa-arrow-right">
                        </i>
                        </div>
                    </a>
                    <a href="#" onclick="read_short(event, 'news-min', 'sec-news')" class="rs-news-min hide">
                        <div class="read-more">Lebih Sedikit&nbsp;&nbsp; 
                        <i class="fa fa-arrow-left">
                        </i>
                        </div>
                    </a>
                </div>
            </div>
        </div>
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
				campaign: {
                    "id": 1,
                    "title": "Buka Puasa Sehat untuk Pejuang Jalanan Bandung",
                    "image": "https://i.ibb.co/ZJQBqb8/Rectangle-39.png",
                    "short-desc": "Kanker kulit yang menyerang Aina sejak usia 1 tahun membuatnya harus kehilangan sebelah bola matanya. Kini, kanker tersebut juga mulai menggerogoti hidungnya.",
                    "description": "Gadis kecil ini sangat tangguh. Aina namanya. Sudah 3 tahun ia berjuang melawan ganasnya kanker kulit. Awalnya, saat ia berusia 1 tahun, timbul bintik-bintik hitam di kulit. Awalnya orang tua Aina mengira bintik itu tidak berbahaya. Namun, bintik tersebut ternyata meluas bersamaan dengan tumbuhnya benjolan di sekitar mata. Benjolan tersebut kemudian semakin besar hingga di usianya yang ke-3, orang tuanya pun memutuskan untuk membawa Aina ke rumah sakit.",
                    "start_date": "2021-03-01",
                    "expire_date": "2021-03-30",
                    "terkumpul": "43768000",
                    "target": "83768000",
                    "category": "ramadhan",
                    "progress": "50",
                    "is_active": 1,
                
                }
					
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
