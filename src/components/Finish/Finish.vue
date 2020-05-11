<template>
  <div class="container">
    <div class="content no-back-button">
      <section class="center">
        <div>
          <div class="header">
            <h1 class="with-underline">Thank you</h1>
          </div>
          <div class="order-id">Order ID: {{ orderID }}</div>
          <div>Your order will be delivered {{ shipments[selectedShipment].duration }}  by {{ shipments[selectedShipment].label }}</div>
          <div class="home-button" @click="goHome">
            <span>←</span>Back to delivery
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
            <div class="text-success">today by {{ shipments[selectedShipment].label }}</div>
          </div>
          <div class="separator"></div>
          <div>
            <div>Payment method</div>
            <div class="text-success">{{ payments[selectedPayment].label }}</div>
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
        </div>
      </aside>
    </div>
  </div>
</template>
<script src="./Finish.ts"></script>
