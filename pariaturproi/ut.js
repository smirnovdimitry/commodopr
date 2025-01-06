function handleMarkSupport(markSupported) {
    if (markSupported === 'continuous') {
        // Handle continuous marking
        console.log('Handling continuous marking');
        // Code for continuous marking logic
    } else if (markSupported === 'discrete') {
        // Handle discrete marking
        console.log('Handling discrete marking');
        // Code for discrete marking logic
    } else if (markSupported === 'binned') {
        // Handle binned marking
        console.log('Handling binned marking');
        // Code for binned marking logic
        processBinnedData();
    } else {
        // Handle unsupported marking type
        console.log('Unsupported mark type');
        // Code for handling unknown or unsupported mark types
    }
}

function processBinnedData() {
    // Example function to process binned data
    console.log('Processing binned data...');
    // Add your binned data processing logic here
}

// Example usage
handleMarkSupport('binned');  // This will trigger the binned marking logic
