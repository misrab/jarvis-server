package main 


import (
	"log"

	"net/http"

	"github.com/gorilla/mux"
)



func InputHandler(res http.ResponseWriter, req *http.Request) {
	
}



func main() {
	router := mux.NewRouter()

	// static
    router.PathPrefix("/").Handler(http.FileServer(http.Dir("./")))

    router.HandleFunc("/api/v1/input", InputHandler).
    	Methods("POST")


    // register routes
    http.Handle("/", router)

    log.Println("Listening...")
    http.ListenAndServe(":4000", nil)
}