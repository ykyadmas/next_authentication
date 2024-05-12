"use client"
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const SessionManager = () => {
  const { data: session, status } = useSession();
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    if (status === 'authenticated' && session?.user?.id) {
      setUserId(session.user.id);
    }
  }, [status, session]);

  return userId;
};

export default SessionManager;
