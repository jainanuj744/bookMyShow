import PageTitle from '../../components/PageTitle'
import {Tabs} from 'antd'
import TheatresList from './TheatresList';

function Profile(){
    return (
        <div>
            <PageTitle title='Profile' />
            <Tabs>
                <Tabs.TabPane tab="Bookings" key="1">
                    Bookings
                </Tabs.TabPane>
                <Tabs.TabPane tab="Apply for Theatre" key="2">
                    <TheatresList/>
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}

export default Profile;