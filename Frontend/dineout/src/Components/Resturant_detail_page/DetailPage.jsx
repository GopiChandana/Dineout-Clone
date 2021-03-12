import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getRestaurant } from '../../Redux/DetailPage/detailPageActionsTypes'
import { Booking } from './Booking'
import { MenuRestaurant } from './MenuRestaurant'
import { OffersPage } from './OffersPage'
import { RestaurantAbout } from './RestaurantAbout'
import { RestaurantAboutSubpart } from './RestaurantAboutSubpart'
import { RestaurantDetail } from './RestaurantDetail'
import styles from "./DetailPage.module.css"

export const DetailPage = () => {
    const restaurantData = useSelector((store) => store.restaurantDetail.restaurantData)

    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getRestaurant())
    }, [])

    return (
        <div className={styles.container}>
            <div style={{ width: "100%" }} className={styles.restaurant_Detail}>
                {restaurantData.map((restaurant) => (
                    <div key={restaurant.id}>
                        <RestaurantDetail key={restaurant.id} restaurantName={restaurant.resturant_name} image={restaurant.image} location={restaurant.location} timings={restaurant.timings} cuisine={restaurant.cuisines} averageCost={restaurant.average_cost} />
                        <OffersPage key={restaurant.id} freeOffers={restaurant.free_offer} />
                        <MenuRestaurant key={restaurant.id} menuImage={restaurant.menu_images} menuLength={1} />
                        <RestaurantAbout key={restaurant.id}>
                            {restaurant.about && <p>{restaurant.about}</p>}
                            <RestaurantAboutSubpart type={"cuisine"} />
                        </RestaurantAbout>
                    </div>
                ))}
            </div>
            <div className={styles.booking_container}>
                <Booking />
            </div>
        </div>
    )
}
