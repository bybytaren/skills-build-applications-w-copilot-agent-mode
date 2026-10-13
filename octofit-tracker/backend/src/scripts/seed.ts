import mongoose from 'mongoose';
import { connectDatabase } from '../config/database.js';
import Activity from '../models/Activity.js';
import Leaderboard from '../models/Leaderboard.js';
import Team from '../models/Team.js';
import User from '../models/User.js';
import Workout from '../models/Workout.js';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await connectDatabase();
    console.log('Connected to octofit_db');

    await Promise.all([
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.create([
      { name: 'Alex Morgan', username: 'alex', email: 'alex@example.com' },
      { name: 'Sam Lee', username: 'sam', email: 'sam@example.com' },
    ]);
    const teams = await Team.create([
      { name: 'Octocats', description: 'Consistent, curious, and moving together.', members: [users[0]._id] },
      { name: 'Code Runners', description: 'A team that makes every step count.', members: [users[1]._id] },
    ]);

    await Activity.create([
      { user: users[0]._id, team: teams[0]._id, type: 'Running', durationMinutes: 30, distanceKm: 5, points: 50 },
      { user: users[1]._id, team: teams[1]._id, type: 'Cycling', durationMinutes: 45, distanceKm: 12, points: 45 },
    ]);
    await Leaderboard.create([
      { user: users[0]._id, team: teams[0]._id, points: 50, rank: 1, period: 'weekly' },
      { user: users[1]._id, team: teams[1]._id, points: 45, rank: 2, period: 'weekly' },
    ]);
    await Workout.create([
      {
        name: 'Starter Strength',
        description: 'A balanced introductory full-body session.',
        difficulty: 'beginner',
        durationMinutes: 25,
        activities: ['Squats', 'Push-ups', 'Plank'],
      },
      {
        name: 'Tempo Run',
        description: 'Build endurance with steady intervals.',
        difficulty: 'intermediate',
        durationMinutes: 35,
        activities: ['Warm-up', 'Tempo intervals', 'Cool-down'],
      },
    ]);
    console.log('Database seeding complete');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
