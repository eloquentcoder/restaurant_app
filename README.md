# Restaurant Quiz App

A modern web application for browsing and discovering restaurants, built with Next.js, TypeScript, tRPC, and Prisma.

## Features

- Browse restaurants with detailed information
- Search restaurants by name
- Filter restaurants by category
- Favorite/unfavorite restaurants
- Responsive design for all devices
- Real-time updates with tRPC

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL
- pnpm (recommended) or npm

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd test_2
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Set up your environment variables:
Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/restaurant_quiz"
```

4. Start PostgreSQL:
```bash
./start-database.sh
```

5. Set up the database:
```bash
npx prisma generate
npx prisma migrate dev
```

6. Seed the database:
```bash
npx prisma db seed
```

## Running the Application

1. Start the development server:
```bash
pnpm dev
# or
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

## Database Management

- To reset the database:
```bash
npx prisma migrate reset
```

- To view the database:
```bash
npx prisma studio
```

## Project Structure

```
test_2/
├── prisma/              # Database schema and migrations
├── src/
│   ├── app/            # Next.js app directory
│   ├── components/     # React components
│   └── server/         # tRPC server and routers
├── public/             # Static assets
└── package.json        # Project dependencies
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [tRPC](https://trpc.io/) - End-to-end typesafe API
- [Prisma](https://www.prisma.io/) - Database ORM
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [PostgreSQL](https://www.postgresql.org/) - Database

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
