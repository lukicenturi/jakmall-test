export default {
  name: 'Delivery',
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
    this.randomOrderId();
    this.calculateTotalFee();
  },

  watch: {
    isDropshipper: function(val) {
      this.saveToLocalStorage();
    },
    form: {
      handler() {
        this.saveToLocalStorage();
      },
      deep: true
    }
  },

  methods: {
    range(start, end) {
      return Array(end - start + 1).fill().map((_, idx) => start + idx)
    },

    randomOrderId() {
      if (this.orderID) return;
      const numberArray = this.range(50, 57);
      const startAlphaArray = this.range(65, 72);
      const middleAlphaArray = this.range(74, 78);
      const endAlphaArray = this.range(80, 90);
      const generatedString = [...numberArray, ...startAlphaArray, ...middleAlphaArray, ...endAlphaArray];

      let code = '';
      for(let i = 0; i < 5; i++) {
        let randomizedIndex = Math.floor(Math.random() * generatedString.length);
        code += String.fromCharCode(generatedString[randomizedIndex]);
      }
      this.orderID = code;
      this.saveToLocalStorage();
    },

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
      this.totalFee = this.cost + (this.isDropshipper ? this.dropshippingFee : 0);
    },

    dropshipingToggle() {
      this.calculateTotalFee();
      this.form.dropshipperPhoneNumber.value = '';
      this.form.dropshipperPhoneNumber.valid = -1;

      this.form.dropshipperName.value = '';
      this.form.dropshipperName.valid = -1;
    },

    checkEmail() {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.form.email.valid = +(re.test(this.form.email.value));
    },

    checkAddress() {
      this.form.address.valid = +(this.form.address.value !== '');
    },

    checkPhoneNumber() {
      let re = /^[0-9\-\+\(\)]{6,20}$/;
      this.form.phoneNumber.valid = +(re.test(this.form.phoneNumber.value));
    },

    checkDropshipperName() {
      this.form.dropshipperName.valid = +(this.form.dropshipperName.value !== '');
    },

    checkDropshipperPhoneNumber() {
      let re = /^[0-9\-\+\(\)]{6,12}$/;
      this.form.dropshipperPhoneNumber.valid = +(re.test(this.form.dropshipperPhoneNumber.value));
    },

    continuePayment() {
      this.checkEmail();
      this.checkAddress();
      this.checkPhoneNumber();
      if (this.isDropshipper) {
        this.checkDropshipperName();
        this.checkDropshipperPhoneNumber();
      }

      let isAllow = true;
      for(let key in this.form) {
        if(this.form[key].valid === 0) {
          isAllow = false;
          break;
        }
      }

      if (isAllow) {
        this.$router.push('/2');
      }
    }
  }
}
