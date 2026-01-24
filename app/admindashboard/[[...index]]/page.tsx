'use client';

import studioConfig from '@/state/sanity/studioConfig';
import { NextStudio } from 'next-sanity/studio';

const AdminDashboard = () => {
  return (
    <div className="mt-10">
      <NextStudio config={studioConfig} />
    </div>
  );
};

export default AdminDashboard;
