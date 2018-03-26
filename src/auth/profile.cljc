(ns auth.profile
 (:require
  auth.data))

(defn profile->name
 [profile]
 (or
  (:name profile)
  auth.data/fallback-name))
