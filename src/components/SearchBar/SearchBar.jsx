import toast from 'react-hot-toast';
export default function SearchBar({ onSubmit }) {
  const handleFormSubmit = event => {
    const notify = () =>
      toast.error('The search field is empty. Please enter a search value', {
        position: 'top-center',
        style: {
          backgroundColor: 'white',
          color: 'green',
        },
      });
    event.preventDefault();
    const form = event.target;
    const inputValue = form.search.value.trim();
    if (inputValue === '') {
      notify();
    } else {
      onSubmit(inputValue);
    }
    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleFormSubmit}>
        <input
          name="search"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
