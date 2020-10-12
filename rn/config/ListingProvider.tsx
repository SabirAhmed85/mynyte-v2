import { Listing } from '../models';
import React from 'react';

type ListingProviderState = {
    selectedListing: Listing | null;
};

export const ListingContext: React.Context<any> = React.createContext({
    selectedListing: null,
    selectListing: () => {}
});

export const ListingProvider = (props: { children: any }) => {
    const [state, setState] = React.useState({ selectedListing: null } as ListingProviderState);

    const handleSelectListing = async (listing: Listing) => {
        setState({ ...state, selectedListing: listing});
    };

    return (
        <ListingContext.Provider value={{
            selectedListing: state.selectedListing,
            selectListing: handleSelectListing}}>
            {props.children}
        </ListingContext.Provider>
    );
}

export default ListingProvider;
