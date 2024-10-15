import Feed from '@/components/feed/Feed';
import ProfileDetails from '@/components/UI/profile/profileDetails';
import React from 'react';

const page = ({params}) => {
    
    return (
        <div>
            <ProfileDetails/>
            {/* post : {params.userId} */}

            {/* <Feed/> */}

        </div>
    );
};

export default page;