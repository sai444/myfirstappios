import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "folder/:id",
    loadChildren: () =>
      import("./folder/folder.module").then(m => m.FolderPageModule)
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then(m => m.HomePageModule)
  },
  {
    path: "signin",
    loadChildren: () =>
      import("./pages/signin/signin.module").then(m => m.SigninPageModule)
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./pages/signup/signup.module").then(m => m.SignupPageModule)
  },
  {
    path: "onboarding",
    loadChildren: () =>
      import("./pages/onboarding/onboarding.module").then(
        m => m.OnboardingPageModule
      )
  },
  {
    path: "driver-list",
    loadChildren: () =>
      import("./pages/driver-list/driver-list.module").then(
        m => m.DriverListPageModule
      )
  },
  {
    path: "contact-list",
    loadChildren: () =>
      import("./pages/contact-list/contact-list.module").then(
        m => m.ContactListPageModule
      )
  },
  {
    path: "select-delivery",
    loadChildren: () =>
      import("./pages/select-delivery/select-delivery.module").then(
        m => m.SelectDeliveryPageModule
      )
  },
  {
    path: "set-location",
    loadChildren: () =>
      import("./pages/set-location/set-location.module").then(
        m => m.SetLocationPageModule
      )
  },
  {
    path: "add-location",
    loadChildren: () =>
      import("./pages/add-location/add-location.module").then(
        m => m.AddLocationPageModule
      )
  },
  {
    path: "search-location",
    loadChildren: () =>
      import("./pages/search-location/search-location.module").then(
        m => m.SearchLocationPageModule
      )
  },
  {
    path: "single-delivery",
    loadChildren: () =>
      import("./pages/single-delivery/single-delivery.module").then(
        m => m.SingleDeliveryPageModule
      )
  },
  {
    path: "fare-detail",
    loadChildren: () =>
      import("./pages/fare-detail/fare-detail.module").then(
        m => m.FareDetailPageModule
      )
  },
  {
    path: "coupon",
    loadChildren: () =>
      import("./pages/coupon/coupon.module").then(m => m.CouponPageModule)
  },
  {
    path: "card-detail",
    loadChildren: () =>
      import("./pages/card-detail/card-detail.module").then(
        m => m.CardDetailPageModule
      )
  },
  {
    path: "delivery-detail",
    loadChildren: () =>
      import("./pages/delivery-detail/delivery-detail.module").then(
        m => m.DeliveryDetailPageModule
      )
  },
  {
    path: "accept-order",
    loadChildren: () =>
      import("./pages/accept-order/accept-order.module").then(
        m => m.AcceptOrderPageModule
      )
  },
  {
    path: "message",
    loadChildren: () =>
      import("./pages/message/message.module").then(m => m.MessagePageModule)
  },
  {
    path: "delivery-begun",
    loadChildren: () =>
      import("./pages/delivery-begun/delivery-begun.module").then(
        m => m.DeliveryBegunPageModule
      )
  },
  {
    path: "success-modal",
    loadChildren: () =>
      import("./pages/success-modal/success-modal.module").then(
        m => m.SuccessModalPageModule
      )
  },
  {
    path: "cancel-modal",
    loadChildren: () =>
      import("./pages/cancel-modal/cancel-modal.module").then(
        m => m.CancelModalPageModule
      )
  },
  {
    path: "reason-modal",
    loadChildren: () =>
      import("./pages/reason-modal/reason-modal.module").then(
        m => m.ReasonModalPageModule
      )
  },
  {
    path: "rating",
    loadChildren: () =>
      import("./pages/rating/rating.module").then(m => m.RatingPageModule)
  },
  {
    path: "multiple-vehicle",
    loadChildren: () =>
      import("./pages/multiple-vehicle/multiple-vehicle.module").then(
        m => m.MultipleVehiclePageModule
      )
  },
  {
    path: "multiple-route",
    loadChildren: () =>
      import("./pages/multiple-route/multiple-route.module").then(
        m => m.MultipleRoutePageModule
      )
  },
  {
    path: "price-detail",
    loadChildren: () =>
      import("./pages/price-detail/price-detail.module").then(
        m => m.PriceDetailPageModule
      )
  },
  {
    path: "amount-modal",
    loadChildren: () =>
      import("./pages/amount-modal/amount-modal.module").then(
        m => m.AmountModalPageModule
      )
  },
  {
    path: "paynow-modal",
    loadChildren: () =>
      import("./pages/paynow-modal/paynow-modal.module").then(
        m => m.PaynowModalPageModule
      )
  },
  {
    path: "booking-modal",
    loadChildren: () =>
      import("./pages/booking-modal/booking-modal.module").then(
        m => m.BookingModalPageModule
      )
  },
  {
    path: "multiple-accept",
    loadChildren: () =>
      import("./pages/multiple-accept/multiple-accept.module").then(
        m => m.MultipleAcceptPageModule
      )
  },
  {
    path: "receipt",
    loadChildren: () =>
      import("./pages/receipt/receipt.module").then(m => m.ReceiptPageModule)
  },
  {
    path: "on-going-job",
    loadChildren: () =>
      import("./pages/on-going-job/on-going-job.module").then(
        m => m.OnGoingJobPageModule
      )
  },
  {
    path: "view-detail",
    loadChildren: () =>
      import("./pages/view-detail/view-detail.module").then(
        m => m.ViewDetailPageModule
      )
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./pages/profile/profile.module").then(m => m.ProfilePageModule)
  },
  {
    path: "deliveries",
    loadChildren: () =>
      import("./pages/deliveries/deliveries.module").then(
        m => m.DeliveriesPageModule
      )
  },
  {
    path: "wallet",
    loadChildren: () =>
      import("./pages/wallet/wallet.module").then(m => m.WalletPageModule)
  },
  {
    path: "notification",
    loadChildren: () =>
      import("./pages/notification/notification.module").then(
        m => m.NotificationPageModule
      )
  },
  {
    path: "invite-friends",
    loadChildren: () =>
      import("./invite-friends/invite-friends.module").then(
        m => m.InviteFriendsPageModule
      )
  },
  {
    path: 'notification-detail',
    loadChildren: () => import('./pages/notification-detail/notification-detail.module').then( m => m.NotificationDetailPageModule)
  },
  {
    path: 'emergence-contact',
    loadChildren: () => import('./pages/emergence-contact/emergence-contact.module').then( m => m.EmergenceContactPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./pages/policy/policy.module').then( m => m.PolicyPageModule)
  },
  {
    path: 'condition',
    loadChildren: () => import('./pages/condition/condition.module').then( m => m.ConditionPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'mdelivery-detail',
    loadChildren: () => import('./pages/mdelivery-detail/mdelivery-detail.module').then( m => m.MdeliveryDetailPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
