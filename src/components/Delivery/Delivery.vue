<template>
  <div class="container">
    <router-link class="back-button" to="#">
      <span>←</span>Back to cart
    </router-link>
    <div class="content">
      <section>
        <div class="header">
          <h1 class="with-underline">Delivery details</h1>
          <label class="dropshipper-checkbox" for="is-dropshipper">
            <div class="checkbox-wrapper">
                <input type="checkbox" id="is-dropshipper" v-model="isDropshipper" @change="dropshipingToggle">
                <label for="is-dropshipper" class="checkbox-label"></label>
            </div>
            <div>
              Send as dropshipper
            </div>
          </label>
        </div>
        <div class="form-data">
          <form @submit.prevent="">
            <div class="row">
              <div class="col-md-7">
                <div class="form-group" :class="[classList[form.email.valid + 1]]">
                  <input
                    type="text"
                    v-model="form.email.value"
                    placeholder=" "
                    @input="checkEmail"
                  >
                  <label>Email</label>
                </div>
              </div>
              <div class="col-md-5">
                <div class="form-group" :class="[classList[form.dropshipperName.valid + 1]]">
                  <input
                    type="text"
                    v-model="form.dropshipperName.value"
                    placeholder=" "
                    :disabled="!isDropshipper"
                    @input="checkDropshipperName"
                  >
                  <label>Dropshipper name</label>
                </div>
              </div>
              <div class="col-md-7">
                <div class="form-group"  :class="[classList[form.phoneNumber.valid + 1]]">
                  <input
                    type="text"
                    v-model="form.phoneNumber.value"
                    placeholder=" "
                    @input="checkPhoneNumber"
                  >
                  <label>Phone Number</label>
                </div>
              </div>
              <div class="col-md-5">
                <div class="form-group" :class="[classList[form.dropshipperPhoneNumber.valid + 1]]">
                  <input
                    type="text"
                    v-model="form.dropshipperPhoneNumber.value"
                    placeholder=" "
                    :disabled="!isDropshipper"
                    @input="checkDropshipperPhoneNumber"
                  >
                  <label>Dropshipper phone number</label>
                </div>
              </div>
              <div class="col-md-7">
                <div class="form-group" :class="[classList[form.address.valid + 1]]">
                  <textarea
                    maxLength="120"
                    v-model="form.address.value"
                    placeholder=" "
                    @input="checkAddress"
                  ></textarea>
                  <label>Delivery address</label>
                  <div class="counter">
                    {{ 120 - form.address.value.length }}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <aside>
        <div>
          <div>
            <h2>Summary</h2>
            <p>10 items purchased</p>
          </div>
        </div>
        <div>
          <div class="price-list">
            <div class="price-item">
              <div class="price-label">Cost of goods</div>
              <div class="price-number">{{ cost.toLocaleString() }}</div>
            </div>
            <div class="price-item" v-if="isDropshipper">
              <div class="price-label">Dropshipping Fee</div>
              <div class="price-number">{{ dropshippingFee.toLocaleString() }}</div>
            </div>
          </div>
          <div class="total-price">
            <div class="total-label">
              <h2>Total</h2>
            </div>
            <div class="total-number">
              <h2>{{ totalFee.toLocaleString() }}</h2>
            </div>
          </div>
          <button class="cta" @click="continuePayment">
            Continue to Payment
          </button>
        </div>
      </aside>
    </div>
  </div>
</template>
<script src="./Delivery.ts"></script>
