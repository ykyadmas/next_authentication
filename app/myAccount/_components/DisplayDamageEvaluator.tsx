import { prisma } from '@/lib/prisma';
import React from 'react';

interface Props {
  claimId: number;
}

const DisplayDamageEvaluator = async ({ claimId }: Props) => {
  try {
    const display = await prisma.damageEvaluator.findMany({
      where: { claimId },
      include: {
        user: true, // Include user information if needed
        claim: true,
      },
    });

    if (!display.length) {
      // Handle no damage evaluator found scenario
      return <p className="mt-6 flex justify-center border border-zinc-300 p-6 text-3xl font-bold text-black">Your Cliam is not Approved Yet so. Please wait until Apprroved and After That You Will come to the comany</p>;
    }

    return (
      <div className="">
        {display.map((item) => (
          <p className="mt-6 flex justify-center border border-zinc-300 p-6 text-3xl font-bold text-black" key={item.id}>
            {item.message}
          </p>
        ))}
      </div>
    );
  } catch (error) {
    console.error('Error fetching damage evaluator:', error);
    // Handle errors gracefully, e.g., display an error message to the user
    return <p className="text-red-500">Error fetching damage evaluator.</p>;
  }
};

export default DisplayDamageEvaluator;
