<template>
  <div class="home">
    <!-- <aside class="aside">
      <div class="aside--content">
        <h1 class="aside--title">Investments</h1>
        <ul>
          <li class="aside--list" style="background-color: #e9e9e9">
            <button class="aside--item">Leveraged Buyout (LBO)</button>
          </li>
          <li class="aside--list">
            <button class="aside--item">Venture Capital</button>
          </li>
          <li class="aside--list">
            <button class="aside--item">Growth Capital</button>
          </li>
        </ul>
      </div>
      <div class="aside--content">
        <h1 class="aside--title">Exits</h1>
        <ul>
          <li class="aside--list">
            <button class="aside--item">Initial Public Offering (IPO)</button>
          </li>
          <li class="aside--list">
            <button class="aside--item">Strategic Sale</button>
          </li>
          <li class="aside--list">
            <button class="aside--item">Secondary Buyout</button>
          </li>
        </ul>
      </div>
      <div class="aside--content">
        <h1 class="aside--title">Settings</h1>
        <ul>
          <li class="aside--list">
            <button class="aside--item">Support</button>
          </li>
          <li class="aside--list">
            <button class="aside--item">Account</button>
          </li>
        </ul>
      </div>
    </aside>
    <main class="main"> -->
      <div>
        <h1>Leveraged Buyout (LBO)</h1>
      </div>
      <div class="home--content">
        <h2>What Is a Leveraged Buyout?</h2>
        <p>
          A leveraged buyout (LBO) is the acquisition of another company using a
          significant amount of borrowed money to meet the cost of acquisition.
          The assets of the company being acquired are often used as collateral
          for the loans, along with the assets of the acquiring company.
        </p>
      </div>
      <div class="home--content">
        <h2>Understanding Leveraged Buyout (LBO)</h2>
        <p>
          In a leveraged buyout (LBO), there is usually a ratio of 90% debt to
          10% equity. Because of this high debt/equity ratio, the bonds issued
          in the buyout are usually not investment grade and are referred to as
          junk bonds. LBOs have garnered a reputation for being an especially
          ruthless and predatory tactic as the target company doesn't usually
          sanction the acquisition. Aside from being a hostile move, there is a
          bit of irony to the process in that the target company's success, in
          terms of assets on the balance sheet, can be used against it as
          collateral by the acquiring company.
        </p>
      </div>
      <div class="home--content">
        <h2>How Does a Leveraged Buyout (LBO) Work?</h2>
        <p>
          A leveraged buyout (LBO) is the acquisition of another company using a
          significant amount of borrowed money to meet the cost of acquisition.
          The debt/equity ratio is usually around 90/10 which relegates the
          bonds issued to be classified as junk. Aside from being a hostile
          move, there is a bit of irony to the LBO process in that the target
          company's success, in terms of assets on the balance sheet, can be
          used against it as collateral by the acquiring company. In other
          words, the assets of the target company are used, along with those of
          the acquiring company, to borrow the needed funding that is then used
          to buy the target company.
        </p>
      </div>
      <div class="home--content">
        <h2>Why Do Leveraged Buyouts (LBOs) Happen?</h2>
        <p>
          LBOs are primarily conducted for three main reasons: to take a public
          company private; to spin-off a portion of an existing business by
          selling it; and to transfer private property, as is the case with a
          change in small business ownership. The main advantage for the
          acquirers is that they can put up a relatively small amount of their
          own equity and, by leveraging it with debt, raise the capital to
          initiate a buyout of a more expensive target.
        </p>
      </div>
      <div class="home--content">
        <h2>What Type of Companies Are Attractive For LBOs?</h2>
        <p>
          LBOs have garnered a reputation for being an especially ruthless and
          predatory tactic as the target company doesn't usually sanction the
          acquisition. That said, attractive LBO candidates typically have
          strong, dependable operating cash flows, well established product
          lines, strong management teams, and viable exit strategies so that the
          acquirer can realize gains.
        </p>
      </div>
    <!-- </main> -->
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: {
  },
});
</script>

<style scoped>
/* home */
.home {
  /* display: flex; */
  padding: 2rem;
}
.aside, .main {
  padding: 2rem 0;
}
.aside {
  width: 25%;
  border-right: 1px solid;
}
.aside--content {
  border-bottom: 1px solid;
}
.aside--content:hover .aside--title {
  opacity: .5;
}
.aside--title {
  background-color: #a5a1a1;
  border-bottom: 1px solid #e9e9e9;
  /* text-decoration: underline; */
}
.aside--list {
  border-bottom: 1px solid #e9e9e9;
}
.aside--list:hover {
  background-color: #e9e9e9;
}
.aside--item {
  cursor: pointer;
  padding: .5rem;
  width: 100%;
  font-size: initial;
}
button.aside--item {
  background: transparent;
  border: none;
  font-size: xx-small;
}
.main {
  width: 72%;
  padding-left: .5rem;
  padding-right: .5rem;
}
.home--content {
  padding-top: 2rem;
  text-align: left;
}
/* .home--content > h2 {
  text-align: left;
} */
/* mini */
@media only screen and (min-width: 481px) {
  .aside {
    width: 20%;
  }
  button.aside--item {
    font-size: initial;
  }
  .main {
    width: 80%;
  }
}
/* max */
@media only screen and (min-width: 981px) {
}
</style>