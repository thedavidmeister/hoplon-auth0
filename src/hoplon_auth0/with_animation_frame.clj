(ns hoplon-auth0.with-animation-frame)

(defmacro with-animation-frame
 "Evaluates the body before the next browser repaint as requestAnimationFrame."
 [& body]
 `(.requestAnimationFrame js/window (fn [] ~@body)))
