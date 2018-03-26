(ns auth.spec
 (:require
  wheel.email.spec
  [clojure.spec.alpha :as spec]))

(spec/def :user/name string?)

(spec/def :user/id
 (spec/and
  string?
  (complement clojure.string/blank?)))

(spec/def :user/user_id :user/id)

(spec/def :user/email :wheel.email/email)

(spec/def :user/profile
 (spec/keys
  :req-un [:user/user_id
           :user/name]))
