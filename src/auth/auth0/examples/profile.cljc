(ns auth.auth0.examples.profile)

(def standard
 {:given_name "Test"
  :mp_aliased true
  :email "foo@example.com"
  :locale "en-GB"
  :sub "google-oauth2|000000000000000000000"
  :name "Testy mc test face"
  :nickname "thetestmeister"
  :email_verified true
  :family_name "Meister"
  :updated_at "2017-02-18T05:17:44.186Z"
  :app_metadata {:mp_aliased true
                 :in_email_octopus true}
  :picture "https://lh5.googleusercontent.com/-00000000000/AAAAAAAAAAA/AAAAAAAAAAA/00000000000/photo.jpg"
  :user_id "google-oauth2|000000000000000000000"
  :gender "male"
  :in_email_octopus true
  :identities [{:provider "google-oauth2"
                :user_id "000000000000000000000"
                :connection "google-oauth2"
                :isSocial true}]
  :clientID "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  :created_at "2016-07-24T17:18:40.291Z"})
