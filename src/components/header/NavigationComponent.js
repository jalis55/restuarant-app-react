import {Navbar,NavbarBrand} from 'reactstrap'

const NavigationComponent = () => {
    return (
        <div>
            <Navbar
                className="my-2"
                color="secondary"
                dark
            >
                <NavbarBrand href="/">
                    ALAM JI RESTO
                </NavbarBrand>
            </Navbar>
        </div>
    )
}

export default NavigationComponent;