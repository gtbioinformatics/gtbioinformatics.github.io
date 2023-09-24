import './Members.css'
import MemberCard from './MemberCard'

function Members() {
  return (
    <>
      <div className='heading'>Our Members</div>
        <div className='members'>
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
        </div>
    </>
  );
}

export default Members;