(ns auth.hoplon
 (:require
  [javelin.core :as j]
  [hoplon.core :as h]
  [garden.units :as u]
  auth.api
  cuerdas.core
  breakpoints.state
  wheel.email.hoplon
  time.hoplon
  breakpoints.state
  wheel.clearfix.hoplon
  auth.profile
  [cljs.test :refer-macros [deftest is are]]))

(defn picture
 [profile]
 (let [url (j/cell= (:picture profile))]
  (h/div
   :class "face"
   :garden (j/cell= (when url {:background-image (str "url(\"" url "\")")})))))

(defn username
 [profile]
 (h/span
  :class "username"
  (j/cell= (auth.profile/profile->name profile))))

(defn email
 [profile]
 (wheel.email.hoplon/email
  :address (j/cell= (:email profile))))

(defn mini-profile
 [profile]
 (h/div
  (h/div
   :garden {:float :left}
   (picture profile))
  (h/div
   :garden {:float :left
            :margin-left (u/px spacing.data/mini-pad)}
   (username profile)
   (h/br)
   (email profile))
  (wheel.clearfix.hoplon/clearfix)))

(defn last-login
 [profile]
 (time.hoplon/time
  :date
  (j/cell=
   (some->>
    profile
    :last_login
    time.data/iso8601->date-time))))

(h/defelem logout
 [{:keys [profile show-text?]}]
 (let [hover? (j/cell false)
       hover-in! #(reset! hover? true)
       hover-out! #(reset! hover? false)
       show-text? (or show-text? true)]
  (j/cell= (when-not profile (hover-out!)))
  (h/div
   :class "logout"
   (h/when-tpl profile
    (h/a
     :garden {:display :flex :align-items :center}
     :id "logout"
     :class (j/cell= {:loggedout (not profile)})
     :click auth.api/logout!
     (picture profile)
     (h/when-tpl show-text?
      (h/span
       :garden {:margin-left (u/px 5)}
       "Log out")))))))

; TESTS

(deftest ??logout
 (let [p (j/cell {})
       l (logout :profile p)]
  (is (wheel.dom.traversal/is? l "div.logout"))
  (is (wheel.dom.traversal/contains? l "a#logout"))
  (reset! p nil)
  (is (wheel.dom.traversal/is? l "div"))
  (is (not (wheel.dom.traversal/contains? l "*"))))

 ; show-text?
 (let [p (j/cell {})
       show-text? (j/cell nil)
       el (logout :profile p :show-text? show-text?)]
  (is (= "" (wheel.dom.traversal/text el)))
  (reset! show-text? true)
  (is (= "Log out" (wheel.dom.traversal/text el)))))

(deftest ??logout-user-profile-picture
 (let [pic-url "http://example.com/foo.png"
       p (j/cell {:picture pic-url})
       l (logout :profile p)]
  (is (wheel.dom.traversal/contains? l ".face"))
  (is (cuerdas.core/includes?
       (-> l
        (wheel.dom.traversal/find ".face")
        first
        (wheel.dom.traversal/css "background-image"))
       pic-url))
  (reset! p nil)
  (is (not (wheel.dom.traversal/contains? l ".face")))))
