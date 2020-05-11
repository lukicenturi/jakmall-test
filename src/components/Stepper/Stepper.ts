export default {
  name: 'Stepper',

  data() {
    return {
      steps: ['Delivery', 'Payment', 'Finish'],
      currentStep: 0,
    }
  },

  watch: {
    '$route.path': function() {
      this.bindCurrentStep();
    }
  },

  mounted() {
    this.bindCurrentStep();
  },

  methods: {
    bindCurrentStep() {
      this.currentStep = parseInt(this.$route.path.charAt(1));
    }
  }
}
