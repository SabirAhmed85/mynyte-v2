import React from 'react';

type ListingProviderState = {
    selectedListingId: number | null;
};

export const ListingContext: React.Context<any> = React.createContext({
    selectedListingId: null,
    selectListing: (id: number) => {}
});

export const ListingProvider = (props: { children: any }) => {
    const [state, setState] = React.useState({ selectedListingId: null } as ListingProviderState);

    const handleSelectListing = async (listingId: number) => {
        setState({ ...state, selectedListingId: listingId});
    };

    return (
        <ListingContext.Provider value={{
            selectedListingId: state.selectedListingId,
            selectListing: handleSelectListing}}>
            {props.children}
        </ListingContext.Provider>
    );
}

export default ListingProvider;
