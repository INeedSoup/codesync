# CodeSync

A real-time collaborative code editor with unique room generation, syntax highlighting, and auto-suggestions. Users can seamlessly edit, save, and download files while engaging in group chat for efficient communication.

## Installation

1) Fork this repository: Click the Fork button located in the top-right corner of this page to fork the repository.

2) Clone the repository:

```bash
git clone https://github.com/<your-username>/Code-Sync.git
```
3) Set .env file: Inside the client and server directories rename the .env.example file to .env and set the following environment variables:

  Frontend:
```bash
VITE_BACKEND_URL=<your_server_url>
```
   Backend:
```bash
PORT=3000
```
4) Install dependencies: Navigate to the frontend and backend directories separately and run:

 ```bash 
npm install
```
5) Start the frontend and backend servers:

Frontend:
```bash
cd client
npm run dev
```

Backend:
```bash
cd server
npm run dev
```

## Docker Deployment

This project now includes production Docker support for both the frontend and backend.

### Run locally with Docker Compose

From the project root:

```bash
docker compose up --build -d
```

Then open:

```bash
http://localhost
```

Health check:

```bash
http://localhost/health
```

### Containers

- `client`: builds the Vite app and serves it through Nginx on port `80`
- `server`: runs the Express + Socket.IO backend on port `3000`

The frontend proxies `/socket.io` traffic to the backend internally, so you only need to expose port `80` on the host.

### Stop the stack

```bash
docker compose down
```

### Deploy on AWS EC2

1. Launch an EC2 instance with Docker installed.
2. Open inbound security group rules for:
   - `80` for HTTP
   - `22` for SSH
3. Copy the project to the instance.
4. From the project root run:

```bash
docker compose up --build -d
```

5. Open:

```bash
http://<your-ec2-public-ip>
```

You can also verify the backend through the Nginx proxy at:

```bash
http://<your-ec2-public-ip>/health
```
# Glimpse of the project

1) This is the Home Page. Features unique room generation with room ID for collaboration.

![image](https://github.com/codrrk08/Code-Sync/assets/95128123/d72ed00e-7104-4a9a-9266-187351ffb4a0)

2) This is the code editor. We can create new files,folders, or open existing file or folders on the system. We can also download the code as a zip file. Comprehensive language support for versatile programming.
   
![image](https://github.com/codrrk08/Code-Sync/assets/95128123/a9f29f1e-f0cf-4dad-a561-2321d75f6629)

3) Real time chat which helps the users collaborate effectively.
   
![image](https://github.com/codrrk08/Code-Sync/assets/95128123/adde39d1-8a05-44f2-9b5e-c406456842d1)

4) Code Execution: Users can execute the code directly within the collaboration environment, providing instant feedback and results.
   
![image](https://github.com/codrrk08/Code-Sync/assets/95128123/5afbf260-5a0e-4bb3-a12d-e312abfa2850)

5) Instant updates and synchronization of code changes across all files and folders. Provides notifications for user join and leave events . Also shows user presence list of users currently in the collaboration session, including online/offline status indicators.
   
![image](https://github.com/codrrk08/Code-Sync/assets/95128123/7ba28628-753f-4c4f-b4cd-c2ebbf196a40)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.







