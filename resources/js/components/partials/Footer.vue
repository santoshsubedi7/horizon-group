<template>
    <div class="font-main bg-[#F2F2F2] pt-10 pb-5 md:px-16 border-t border-[#ddd]">
      <div class="relative flex flex-col md:flex-row justify-between items-start gap-10 flex-wrap px-8 py-6">
        <FooterBrand />
        <div class="lg:ml-auto lg:self-end">
          <FooterNav />
          <SocialIcons />
        </div>
        
      </div>
      <hr class="border-gray-300 mt-2" />
      <FooterLegal />
    </div>
  </template>
  
  <script>
  import FooterBrand from '@/components/ui/footer/FooterBrand.vue';
  import FooterNav from '@/components/ui/footer/FooterNav.vue';
  import SocialIcons from '@/components/ui/footer/SocialIcons.vue';
  import FooterLegal from '@/components/ui/footer/FooterLegal.vue';

  export default {
    name: 'Footer',
    components: {
      FooterBrand,
      FooterNav,
      SocialIcons,
      FooterLegal,
    },
  };
  </script>
  