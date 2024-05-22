# GeekGather Backend Server

Welcome to the GeekGather backend server! This server powers the functionality of our web application, allowing users to explore and participate in exciting IT events. Here's a summary of the backend functions:

## Backend Functions

1. **Retrieve Event List with Pagination and Sorting**:

   - Endpoint: `/api/events`
   - Description: Retrieves a paginated list of all events.
   - Query Parameters:

     - `page`: Page number (optional, default: 1)
     - `limit`: Limit of documents per page
     - `sortField`: Sort events by name, date, or organizer (optional, default: date)
     - `sortBy`: Sorting order

   - Response: Returns the object with pagination information and events detail.

2. **Retrieve Participants for a Specific Event**:

   - Endpoint: `/api/events/:eventId/participants`
   - Description: Retrieves a list of participants for the specified event.
   - Path Parameter:

     - `eventId`: ID of the event

   - Response: Returns users details.

3. **Add Participant to an Event**:
   - Endpoint: `/api/events/:eventId/participants`
   - Description: Adds a participant to the specified event.
   - Path Parameter:
     - `eventId`: ID of the event
   - Request Body:
     ```json
     {
       "full_name": "Aaa Aaa",
       "email": "aaa.aaa@example.com",
       "date_of_birth": "1993-11-10",
       "heard_about_event": "Social media"
     }
     ```
   - Response: Returns the newly added participant's details.

## Getting Started

1. **Clone this repository**:

git clone https://github.com/bonny-art/events-registration-api

2. **Install dependencies**:

npm install

3. **Start the development server**:

npm start

4. **Open your browser and visit http://localhost:3000**.

## Contributing

We welcome contributions! Feel free to submit pull requests or report issues.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Get ready to geek out with GeekGather!
