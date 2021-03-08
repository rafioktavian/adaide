<template>
	<article>
		<!-- Navbar Mobile -->
		<nav class="navbar-mobile"></nav>
		<nav class="navbar desktop-navigation other-navbar p-0 fixed-bottom">
			<ul class="menu-mobile-bottom">
				<li>
					<nuxt-link to="/" exact-active-class="active">
						<span class="img-fluid img-icon icon-home"></span>
						<p class="lh-12 mb-0">Beranda</p>
					</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/program" exact-active-class="active">
						<span class="img-fluid img-icon icon-program"></span>
						<p class="lh-12 mb-0">Program</p>
					</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/berita" exact-active-class="active">
						<span class="img-fluid img-icon icon-news"></span>
						<p class="lh-12 mb-0">Berita</p>
					</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/donasi" exact-active-class="active">
						<span class="img-fluid img-icon icon-donate"></span>
						<p class="lh-12 mb-0">Donasi Saya</p>
					</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/akun" exact-active-class="active">
						<span class="img-fluid img-icon icon-account"></span>
						<p class="lh-12 mb-0">Akun</p>
					</nuxt-link>
				</li>
			</ul>
		</nav>
	</article>
</template>

<script>

</script>
