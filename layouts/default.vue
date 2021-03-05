<template>
     <section>
        <!-- Header -->
        <Header/>
        <!-- Header End -->

        <!-- ============ Body content start ============= -->
        <section>
            <nuxt/>
        </section>
        <!-- ============ Body content End ============= -->
        
        <!-- Footer -->
        <Footer/>
        <!-- Footer End -->

    </section>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: { 
    Header,
    Footer
  },
}
</script>
