(ns auth.styles
 (:require
  [garden.units :as u]
  [garden.selectors :as s]
  breakpoints.styles
  colours.data))

(def ^:screen logout
 [:.logout
  {:display :flex
   :align-items :center
   :justify-content :flex-start
   :order 100}
  (breakpoints.styles/medium-up
   ; Measured to stop layout moving when logging in/out.
   {:height (u/px 38)
    :width (u/px 124)})])

(def ^:screen face
 [:.face
  {:width (u/px auth.data/face-size)
   :height (u/px auth.data/face-size)
   :border-radius (u/percent 50)
   :background-color colours.data/bg
   :background-size :cover}])
