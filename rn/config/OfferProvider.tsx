import { Offer } from '../models';
import React from 'react';

type OfferProviderState = {
    selectedOfferId?: number;
};

export const OfferContext: React.Context<any> = React.createContext({
    selectedOfferId: null,
    selectOffer: () => {},
});

export const OfferProvider = (props: { children: any }) => {
    const [state, setState] = React.useState({  } as OfferProviderState);

    const handleSelectOffer = async (offerId: number) => {
        setState({ ...state, selectedOfferId: offerId});
    };

    return (
        <OfferContext.Provider value={{
            selectedOfferId: state.selectedOfferId,
            selectOffer: handleSelectOffer}}>
            {props.children}
        </OfferContext.Provider>
    );
}

export default OfferProvider;
