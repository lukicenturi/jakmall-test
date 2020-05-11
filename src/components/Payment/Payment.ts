export default {
  name: 'Payment',
  data() {
    return {
      localStorageLocation: 'jakmall_storage',
      isDropshipper: false,
      cost: 500000,
      dropshippingFee: 5900,
      totalFee: 0,
      form: {
        email: {
          value: '',
          valid: -1,
        },
        phoneNumber: {
          value: '',
          valid: -1,
        },
        address: {
          value: '',
          valid: -1,
        },
        dropshipperName: {
          value: '',
          valid: -1,
        },
        dropshipperPhoneNumber: {
          value: '',
          valid: -1,
        },
      },
      shipments: {
        gosend: {
          label: 'GO-SEND',
          price: 15000,
          duration: 'today',
        },
        jne: {
          label: 'JNE',
          price: 9000,
          duration: '2 days',
        },
        pc: {
          label: 'Personal Courier',
          price: 29000,
          duration: '1 day',
        }
      },
      selectedShipment: 'gosend',
      payments: {
        ewallet: {
          label: 'e-Wallet',
          remain: 1500000,
        },
        bankTransfer: {
          label: 'Bank Transfer',
          remain: 0,
        },
        virtualAccount: {
          label: 'Virtual Account',
          remain: 0,
        }
      },
      selectedPayment: 'ewallet',
      orderID: '',
      classList: ['', 'failed', 'success']
    }
  },

  created() {
    this.bindLocalStorage();
  },

  mounted() {
    this.calculateTotalFee();
  },

  watch: {
    selectedShipment: function(val) {
      this.calculateTotalFee();
      this.saveToLocalStorage();
    },
    selectedPayment: function(val) {
      this.saveToLocalStorage();
    }
  },

  methods: {
    saveToLocalStorage() {
      const data = JSON.stringify(this._data);
      localStorage.setItem(this.localStorageLocation, data);
    },

    bindLocalStorage() {
      if (localStorage.getItem(this.localStorageLocation)) {
        const data = JSON.parse(localStorage.getItem(this.localStorageLocation));

        Object.assign(this, data);

        for (let key in data.form) {
          if (data.form[key].value === '') {
            this.form[key].valid = -1;
          }
        }
      }
    },

    calculateTotalFee() {
      this.totalFee = this.cost + (this.isDropshipper ? this.dropshippingFee : 0) + this.shipments[this.selectedShipment].price;
    },

    setShipment(shipment) {
      this.selectedShipment = shipment;
    },

    setPayment(payment) {
      this.selectedPayment = payment;
    },

    doPayment() {
      this.$router.push('/3');
    }
  }
}
