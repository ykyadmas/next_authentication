export { default } from 'next-auth/middleware';

export const config={
 matcher:['/admin/:path*','/ProposalSubmit','/ProofSubmit','/auth'],  
}
// '/api/:path*'

