declare namespace javax {
    namespace sound {
        namespace midi {
            /**
             * A <code>Patch</code> object represents a location, on a MIDI
             * synthesizer, into which a single instrument is stored (loaded).
             * Every <code>Instrument</code> object has its own <code>Patch</code>
             * object that specifies the memory location
             * into which that instrument should be loaded. The
             * location is specified abstractly by a bank index and a program number (not by
             * any scheme that directly refers to a specific address or offset in RAM).
             * This is a hierarchical indexing scheme: MIDI provides for up to 16384 banks,
             * each of which contains up to 128 program locations.  For example, a
             * minimal sort of synthesizer might have only one bank of instruments, and
             * only 32 instruments (programs) in that bank.
             * <p>
             * To select what instrument should play the notes on a particular MIDI
             * channel, two kinds of MIDI message are used that specify a patch location:
             * a bank-select command, and a program-change channel command.  The Java Sound
             * equivalent is the
             * {@link MidiChannel#programChange(int, int) programChange(int, int)}
             * method of <code>MidiChannel</code>.
             * @see Instrument
             * @see Instrument#getPatch()
             * @see MidiChannel#programChange(int, int)
             * @see Synthesizer#loadInstruments(Soundbank, Patch[])
             * @see Soundbank
             * @see Sequence#getPatchList()
             * @author Kara Kytle
             */
            // @ts-ignore
            class Patch extends java.lang.Object {
                /**
                 * Constructs a new patch object from the specified bank and program
                 * numbers.
                 * @param bank the bank index (in the range from 0 to 16383)
                 * @param program the program index (in the range from 0 to 127)
                 */
                // @ts-ignore
                constructor(bank: number /*int*/, program: number /*int*/)
                /**
                 * Returns the number of the bank that contains the instrument
                 * whose location this <code>Patch</code> specifies.
                 * @return the bank number, whose range is from 0 to 16383
                 * @see MidiChannel#programChange(int, int)
                 */
                // @ts-ignore
                getBank(): int
                /**
                 * Returns the index, within
                 * a bank, of the instrument whose location this <code>Patch</code> specifies.
                 * @return the instrument's program number, whose range is from 0 to 127
                 * @see MidiChannel#getProgram
                 * @see MidiChannel#programChange(int)
                 * @see MidiChannel#programChange(int, int)
                 */
                // @ts-ignore
                getProgram(): int
            }
        }
    }
}
