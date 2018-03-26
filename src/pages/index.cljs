(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]))

(h/html
 (h/head
  (h/title "Hoplon Auth0"))
 (h/body
  (h/div
   "Hi!")))
