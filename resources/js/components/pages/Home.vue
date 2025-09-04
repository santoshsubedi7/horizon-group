<template>
  <Hero />
  <div class="mt-32">
    <OurVision />
  </div>
  <div class="mt-32">
    <HgStrongPoint />
  </div>
  <div>
    <OurService />
  </div>
  <div class="mt-16 lg:mt-32 ">
    <HgCareerAcademy />
    <div><Progress /></div>
    <Curriculum />
  </div>
  <div class="mt-16 lg:mt-32">
    <Serviceflow />
  </div>
  <div class="mt-16 lg:mt-32">
    <faqComponent />
  </div>
</template>

<script>
import Hero from '../../components/ui/home/Hero.vue';
import OurVision from '../ui/home/OurVision.vue';
import HgStrongPoint from '../ui/home/HgStrongPoint.vue';
import OurService from '../ui/home/OurService.vue';
import HgCareerAcademy from '../ui/home/HgCareerAcademy.vue';
import Progress from '../ui/home/Progress.vue';
import Curriculum from '../ui/home/Curriculum.vue';
import Serviceflow from '../ui/home/ServiceFlow.vue'
import faqComponent from '../ui/home/faq.component.vue';

export default {
  name: `Home`,
  components: {
    Hero,
    OurVision,
    HgStrongPoint,
    OurService,
    HgCareerAcademy,
    Progress,
    Curriculum,
    Serviceflow,
    faqComponent
  }
}
</script>