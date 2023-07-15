package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type FormData struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Message string `json:"message"`
}

func contactHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	decoder := json.NewDecoder(r.Body)
	var formData FormData
	err := decoder.Decode(&formData)
	if err != nil {
		http.Error(w, "Invalid request data", http.StatusBadRequest)
		return
	}

	// Replace the following code with your email sending logic
	fmt.Printf("Received contact form data:\nName: %s\nEmail: %s\nMessage: %s\n",
		formData.Name, formData.Email, formData.Message)

	response := map[string]string{"message": "Email sent successfully"}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func main() {
	http.HandleFunc("/contact", contactHandler)

	port := ":5000"
	fmt.Printf("Server is running on http://localhost%s\n", port)
	http.ListenAndServe(port, nil)
}
