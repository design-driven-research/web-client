(ns rdd.utils.select-utils)

(defn build-select-options
  "Create select options
   
   Args

   1. options - The source collection
   2. title-key - The keyword to use to create the title of the option
   3. id-key - The keyword to use to create the id of the option

   Example

   (build-select-options [{:name 'California' :code 'ca'}] :name :code)

   Returns
   ({:title 'California', :id 'ca'})
   
   "
  [options title-key id-key]
  (map (fn [option] {:title (title-key option)
                     :id (id-key option)}) options))


(defn match-option-by-keyword
  "Return matching option based on keywords
   
   Args

   1. options - Source collections to search through
   2. value - The value to match on
   3. key - The key to use to search in the options map

   Example

   (match-option-by-keyword [{:name 'California' :code 'ca'}] 'ca' :code)

   Returns

   {:name 'California', :code 'ca'}
   "
  [options value key]
  (first (filter (fn [option] (= value (key option))) options)))
