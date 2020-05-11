<template>
  <div class="container">
    <router-link class="back-button" to="/1">
      <span>←</span>Back to delivery
    </router-link>
    <div class="content">
      <section>
        <div class="shipment-wrapper">
          <div class="header">
            <h1 class="with-underline">Shipment</h1>
          </div>
          <div class="box-container">
            <div class="box-wrapper" v-for="(shipment, key) in shipments">
              <div class="box-item" :class="{selected: key === selectedShipment}" @click="setShipment(key)">
                <div>{{ shipment.label }}</div>
                <strong>{{ shipment.price }}</strong>
              </div>
            </div>
          </div>
        </div>
        <div class="payment-wrapper">
          <div class="header">
            <h1 class="with-underline">Payment</h1>
          </div>
          <div class="box-container">
            <div class="box-wrapper" v-for="(payment, key) in payments">
              <div class="box-item" :class="{selected: key === selectedPayment}" @click="setPayment(key)">
                <div>{{ payment.label }}</div>
                <strong v-if="key === 'ewallet'">{{ payment.remain.toLocaleString() }} left</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
      <aside>
        <div>
          <div>
            <h2>Summary</h2>
            <p>10 items purchased</p>
          </div>
          <div class="separator"></div>
          <div>
            <div>Delivery estimation</div>
            <div class="text-success">{{ shipments[selectedShipment].duration }} by {{ shipments[selectedShipment].label }}</div>
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
            <div class="price-item">
              <div class="price-label"><strong>{{ shipments[selectedShipment].label }}</strong> shipment</div>
              <div class="price-number">{{ shipments[selectedShipment].price.toLocaleString() }}</div>
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
          <button class="cta" @click="doPayment">
            Pay with {{ payments[selectedPayment].label }}
          </button>
        </div>
      </aside>
    </div>
  </div>
</template>
<script src="./Payment.ts"></script>
