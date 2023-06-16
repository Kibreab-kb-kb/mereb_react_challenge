import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

const axios = require("axios");

jest.mock("axios");

describe("App", () => {
    beforeEach(() => {
        axios.get.mockClear();
        axios.get.mockResolvedValue({ data: { results: [] } });
    });

    test("renders the app correctly", () => {
        render(<App />);

        expect(
            screen.getByText("All the best star wars characters in one place.")
        ).toBeInTheDocument();
    });

    test("fetches data from API on component mount", () => {
        render(<App />);

        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith("https://swapi.dev/api/people");
    });

    test("displays loading state while fetching data", () => {
        render(<App />);

        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    test("displays cards when data is available", async () => {
        const responseData = {
            data: {
                results: [
                    {
                        name: "Luke Skywalker",
                        height: "172",
                        birth_year: "19BBY",
                        url: "https://swapi.dev/api/people/1",
                    },
                    {
                        name: "Darth Vader",
                        height: "202",
                        birth_year: "41.9BBY",
                        url: "https://swapi.dev/api/people/4",
                    },
                ],
                previous: null,
                next: "https://swapi.dev/api/people?page=2",
            },
        };
        axios.get.mockResolvedValueOnce(responseData);

        render(<App />);

        expect(await screen.findByText("Luke Skywalker")).toBeInTheDocument();
        expect(screen.getByText("Darth Vader")).toBeInTheDocument();
    });

    test("opens modal when card is clicked", async () => {
        const responseData = {
            data: {
                results: [
                    {
                        name: "Luke Skywalker",
                        height: "172",
                        birth_year: "19BBY",
                        url: "https://swapi.dev/api/people/1",
                    },
                ],
            },
        };
        axios.get.mockResolvedValueOnce(responseData);

        render(<App />);

        const card = await screen.findByText("Luke Skywalker");
        fireEvent.click(card);

        expect(screen.getByText("Modal Content")).toBeInTheDocument();
    });

    test("fetches data based on search query", async () => {
        const responseData = {
            data: {
                results: [
                    {
                        name: "Luke Skywalker",
                        height: "172",
                        birth_year: "19BBY",
                        url: "https://swapi.dev/api/people/1",
                    },
                ],
            },
        };
        axios.get.mockResolvedValueOnce(responseData);

        render(<App />);

        const searchInput = screen.getByPlaceholderText("Search");
        const searchButton = screen.getByText("Search");

        fireEvent.change(searchInput, { target: { value: "Luke" } });
        fireEvent.click(searchButton);

        expect(axios.get).toHaveBeenCalledTimes(2);
        expect(axios.get).toHaveBeenCalledWith(
            "https://swapi.dev/api/people/?search=Luke"
        );
    });
});
